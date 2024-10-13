package com.project.item.api;

import com.project.item.DTO.ItemDto;

import java.util.List;

public interface ItemController {

    ItemDto save(ItemDto itemDto);
    void update(ItemDto itemDto,String code);
    void delete(String code);
    ItemDto get(String code);
    List<ItemDto> getAll();

}
