using Microsoft.AspNetCore.Components.WebView.Maui;

namespace MauiApp1;

public partial class MainPage : ContentPage
{
	public MainPage(Environment env)
	{
		if (env.isDevelopment)
		{
			var view = new WebView() { Source = "http://localhost:5173/" };
			Content = view;
		}
		else
		{
			var view = new BlazorWebView()
			{
				HostPage = "wwwroot/dist/index.html"
			};
			var rootComponent = new RootComponent()
			{
				Selector = ".mandatory-blazor-shim",
				ComponentType = typeof(Mandatory)
			};

			view.RootComponents.Add(rootComponent);

			Content = view;
		}
	}
}