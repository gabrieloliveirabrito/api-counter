using Microsoft.AspNetCore.Mvc;

namespace ApiCounter.Features.Counter;

[ApiController]
[Route("api/[controller]")]
public class CounterController : ControllerBase
{
    [HttpPost("increment")]
    public ActionResult<CounterResponse> Increment([FromBody] CounterRequest request)
    {
        try
        {
            if (request.Value < 0)
                return BadRequest(new { message = "O valor não pode ser negativo" });

            var result = request.Value + 1;
            return Ok(new CounterResponse(result));
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = $"{nameof(ex)}: {ex.Message}" });
        }
    }
}