package com.rentatools.RentaTools.exceptions;

public class ValidationFailedException extends RuntimeException{
    public ValidationFailedException(String message){
        super(message);
    }
}
