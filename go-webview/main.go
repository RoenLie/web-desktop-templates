package main

import (
	"embed"
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"regexp"
	"strings"

	"github.com/jchv/go-webview-selector"
)

//go:embed wwwroot/dist/*
var content embed.FS

func GetWorkDir() string {
	ex, err := os.Executable()
	if err != nil {
		panic(err)
	}

	dir := filepath.Dir(ex)

	// Helpful when developing:
	// when running `go run`, the executable is in a temporary directory.
	if strings.Contains(dir, "go-build") {
		return "."
	}
	return filepath.Dir(ex)
}

func AppendPrefix(prefix string, h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		trimDuplicates := func(str string, duplicate string) string {
			regex := regexp.MustCompile("(?:" + duplicate + "){2,}")

			return regex.ReplaceAllString(str, duplicate)
		}

		// Get the original URL.
		url := r.URL

		// Mutate the URL.
		url.Path = trimDuplicates(prefix+url.Path, "/")

		fmt.Println(url.Path)

		h.ServeHTTP(w, r)
	})
}

func main() {
	fs := http.FileServer(http.FS(content))
	http.Handle("/", AppendPrefix("/wwwroot/dist", fs))

	go http.ListenAndServe(":46852", nil)

	debug := true
	w := webview.New(debug)
	if w == nil {
		log.Fatalln("Failed to load webview.")
	}
	defer w.Destroy()

	w.SetTitle("Minimal webview example")
	w.SetSize(800, 600, webview.HintNone)

	if GetWorkDir() == "." {
		w.Navigate("http://localhost:5173")
		fmt.Println("I am running a go run command")
	} else {
		w.Navigate("http://localhost:46852/index.html")
		fmt.Println("I am running a compiled binary")
	}

	w.Run()
}
