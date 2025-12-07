package com.neightec.neightecavserver.services.mapper;

import com.neightec.neightecavserver.models.dto.GuestDTO;
import com.neightec.neightecavserver.models.dto.NeightecUserDTO;
import com.neightec.neightecavserver.models.neightec_data.Guest;
import com.neightec.neightecavserver.models.neightec_data.NeightecUser;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface NeightecUserMapper {
    NeightecUserDTO toDTO(NeightecUser user);
    NeightecUser toEntity(NeightecUserDTO user);
}
