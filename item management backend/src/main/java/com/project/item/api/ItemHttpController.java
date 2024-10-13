package com.project.item.api;

import com.project.item.DTO.ItemDto;
import com.project.item.service.ItemService;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/items")
@CrossOrigin(origins = "http://localhost:4200")
public class ItemHttpController implements ItemController {

    private final ItemService itemService;

    public ItemHttpController(ItemService itemService) {
        this.itemService = itemService;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(consumes = "application/json")
    @Override
    public ItemDto save(@RequestBody @Validated ItemDto itemDto) {
        return itemService.saveItem(itemDto);
    }

    @ResponseStatus(HttpStatus.OK)
    @PutMapping(value = {"/{code}"}, consumes = "application/json")
    @Override
    public void update(@RequestBody @Validated ItemDto itemDto, @PathVariable String code) {
        itemDto.setCode(code);
        itemService.updateItem(itemDto);
    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping("/{code}")
    //@Override
    public void delete(@PathVariable @Validated String code) {
        itemService.deleteItem(code);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value = "/{code}",produces = "application/json")
    @Override
    public ItemDto get(@PathVariable("code")  String code) {

        return itemService.getItemById(code);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(produces = "application/json")
    @Override
    public List<ItemDto> getAll() {
        return itemService.itemList();
    }
}
