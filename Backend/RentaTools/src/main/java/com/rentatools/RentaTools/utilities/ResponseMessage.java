package com.rentatools.RentaTools.utilities;
import lombok.*;
import org.springframework.http.HttpStatus;

@NoArgsConstructor
@AllArgsConstructor
@Setter @Getter
public class ResponseMessage {
    private HttpStatus status;
    private String message;
    private Object info;

    public ResponseMessage(HttpStatus status, String message) {
        this.status = status;
        this.message = message;
    }

    public ResponseMessage(String message){
        this.message = message;
    }
}