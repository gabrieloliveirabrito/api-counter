namespace ApiCounter.Features.Counter;

/// <summary>
/// O registro de requisição da rota do contador.
/// </summary>
/// <param name="Value">O valor que irá ser operado.</param>
public record CounterRequest(int Value);