package com.project.item.service.impl;

import com.project.item.Entity.Item;
import com.project.item.DTO.ItemDto;
import com.project.item.repository.ItemRepository;
import com.project.item.service.ItemService;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ItemServiceImpl implements ItemService {

    private final ItemRepository itemRepository;
    private  ModelMapper modelMapper;

    public ItemServiceImpl(ItemRepository itemRepository,ModelMapper modelMapper) {
        this.itemRepository = itemRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public ItemDto saveItem(ItemDto itemDto) {
        Optional<Item> isItemExist = itemRepository.findById(itemDto.getCode());
        if(isItemExist.isPresent()){
            throw new RuntimeException("Item Already Exists");
        }

        Item saveItem = modelMapper.map(itemDto, Item.class);
        itemRepository.save(saveItem);

        return modelMapper.map(saveItem, ItemDto.class);
    }

    @Override
    public void updateItem(ItemDto itemDto) {
        Item currentItem = itemRepository.findById(itemDto.getCode()).orElseThrow(() -> new RuntimeException("Item Not Found"));

        if(currentItem.getName() !=null && !itemDto.getName().isEmpty()){
            currentItem.setName(itemDto.getName());
        }
        if(!currentItem.getDescription().equals(itemDto.getDescription()) && !itemDto.getDescription().isEmpty()){
            currentItem.setDescription(itemDto.getDescription());
        }
        if(itemDto.getPrice()>0){
            currentItem.setPrice(itemDto.getPrice());
        }

        itemRepository.save(currentItem);

    }

    @Override
    public void deleteItem(String code) {
        Optional<Item> isExist = itemRepository.findById(code);
        if(!isExist.isPresent()){
            throw new RuntimeException("Item Not Found");
        }
        itemRepository.deleteById(code);
    }

    @Override
    public ItemDto getItemById(String code) {
        Item item = itemRepository.findById(code).orElseThrow(() -> new RuntimeException("Item Not Found"));

        return modelMapper.map(item, ItemDto.class);
    }

    @Override
    public List<ItemDto> itemList() {
        List<Item> itemList = itemRepository.findAll();

        return itemList.stream().map(item->{
            return modelMapper.map(item, ItemDto.class);
        }).collect(Collectors.toList());
    }
}
