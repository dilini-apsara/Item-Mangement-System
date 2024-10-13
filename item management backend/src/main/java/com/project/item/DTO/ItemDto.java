package com.project.item.DTO;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.service.annotation.PatchExchange;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ItemDto {
    @NotNull(message = "can not be empty")
    @Pattern(regexp = "^I\\d{4}$",message = "Invalid pattern")
    private String code;
    @NotNull(message = "Can not be empty")
    @Pattern(regexp = "^[A-Za-z0-9 ]+$",message = "invalid input")
    private String name;
    @NotNull(message = "Can not be empty")
    @Pattern(regexp = "^[A-Za-z0-9 ]+$",message = "invalid input")
    private String description;
    @NotNull(message = "can not be empty")
    private int price;
    @NotNull(message = "can not be empty")
    private int amount;
}
