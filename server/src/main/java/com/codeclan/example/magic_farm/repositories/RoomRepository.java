package com.codeclan.example.magic_farm.repositories;

import com.codeclan.example.magic_farm.models.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room,Long> {
}
