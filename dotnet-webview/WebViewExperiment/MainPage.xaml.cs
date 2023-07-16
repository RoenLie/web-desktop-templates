namespace WebViewExperiment;

public partial class MainPage : ContentPage
{
	int count = 0;

	public MainPage()
	{
		InitializeComponent();

		//Browser.Source = "http://localhost:5173";
		var path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "dist", "index.html");
		Browser.Source = path;
	}

	private void OnCounterClicked(object sender, EventArgs e)
	{ }
}

