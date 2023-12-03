package com.rentatools.RentaTools.entity.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmailDto {
    private String recipient;
    private String message;
    private String subject;
    private String attachment;

}
