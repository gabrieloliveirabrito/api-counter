namespace ApiCounter.Features.Counter;

/// <summary>
/// O registro de resposta da rota do contador.
/// </summary>
/// <param name="Value">O valor retornado após a operação.</param>
public record CounterResponse(int Value);