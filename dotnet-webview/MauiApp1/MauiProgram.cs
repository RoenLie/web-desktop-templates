using Microsoft.Extensions.Logging;

namespace MauiApp1;

public static class MauiProgram
{
	public static MauiApp CreateMauiApp()
	{
		var builder = MauiApp.CreateBuilder();
		builder.UseMauiApp<App>();

		builder.Services.AddMauiBlazorWebView();

		var env = new Environment() { isDevelopment = false };

#if DEBUG
		builder.Services.AddBlazorWebViewDeveloperTools();
		builder.Logging.AddDebug();
		env.isDevelopment = true;
#endif

		builder.Services.AddSingleton<MainPage>();
		builder.Services.AddSingleton(provider => env);

		return builder.Build();
	}
}


public class Environment
{
	public bool isDevelopment = false;
}