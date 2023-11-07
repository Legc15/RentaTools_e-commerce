package com.rentatools.RentaTools.exceptions;
import com.rentatools.RentaTools.utilities.ResponseMessage;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.print.AttributeException;

@RestControllerAdvice
public class GlobalExceptions {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ResponseMessage> resourceException(ResourceNotFoundException e){
        return  ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseMessage(HttpStatus.NOT_FOUND, e.getMessage()));
    }

    @ExceptionHandler(ValidationFailedException.class)
    public ResponseEntity<ResponseMessage> methodArgNotValid(ValidationFailedException e){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage(HttpStatus.BAD_REQUEST, e.getMessage()));
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ResponseMessage> undefinedException(Exception e){
        return  ResponseEntity.internalServerError().body(new ResponseMessage(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage()));
    }
}
