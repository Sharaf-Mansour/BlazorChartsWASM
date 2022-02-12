namespace BlazorChartsWASM.Pages;
public partial class Index
{
    IJSObjectReference? IJSObjectReference { get; set; }
    public static List<Item> Data => new()
    {
        new("USA", 69),
        new("UK", 420)
    };
    async Task ShowChart() => await IJSObjectReference!.InvokeVoidAsync("CreatePieChart", JsonSerializer.Serialize(Data));
    //async Task Update() => await   IJSObjectReference!.InvokeVoidAsync("UpdatePieChart", JsonSerializer.Serialize(Data));
    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            IJSObjectReference = await JSRuntime!.InvokeAsync<IJSObjectReference>("import", "./js/BlazorChart.js");
            await IJSObjectReference!.InvokeVoidAsync("CreateRoot");
        }
    }
}