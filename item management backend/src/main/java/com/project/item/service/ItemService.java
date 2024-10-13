package com.project.item.service;

import com.project.item.DTO.ItemDto;

import java.util.List;

public interface ItemService {
ItemDto saveItem(ItemDto item);
void updateItem(ItemDto item);
void deleteItem(String code);
ItemDto getItemById(String code);
List<ItemDto> itemList();
}
