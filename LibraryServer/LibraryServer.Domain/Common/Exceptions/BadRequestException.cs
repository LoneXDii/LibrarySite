﻿namespace LibraryServer.Domain.Common.Exceptions;

public class BadRequestException : Exception
{
    public BadRequestException(string message) : base(message) { }
}
