﻿namespace LibraryServer.Domain.Common.Exceptions;

public class ApiException : Exception
{
    public ApiException(){ }
    
    public new string? Message {  get; set; }
    public string? Details { get; set; }
    public int StatusCode { get; set; }
}
