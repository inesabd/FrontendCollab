package net.javaguides.recom.service.impl;

import lombok.AllArgsConstructor;
import net.javaguides.recom.dto.UserDto;
import net.javaguides.recom.entity.User;
import net.javaguides.recom.exception.ResourceNotFoundException;
import net.javaguides.recom.mapper.UserMapper;
import net.javaguides.recom.repository.UserRepository;
import net.javaguides.recom.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserSeerviceImpl implements UserService {

    private UserRepository userRepository;

    @Override
    public UserDto createUser(UserDto userDto) {

        User user = UserMapper.mapToUser(userDto);
        User savedUser = userRepository.save(user);
        return UserMapper.mapToUserDto(savedUser);
    }

    @Override
    public UserDto getUserById(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Aucun utilisateur existe avec cet id : " + userId));
        return UserMapper.mapToUserDto(user);
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map((user) -> UserMapper.mapToUserDto(user))
                .collect(Collectors.toList());
    }

    @Override
    public UserDto updateUser(Long userId, UserDto updateUser) {

        User user = userRepository.findById(userId).orElseThrow(
                () -> new ResourceNotFoundException("Aucun utilisateur existe avec cet id : " + userId)
        );

        user.setFirstName(updateUser.getFirstName());
        user.setLastName(updateUser.getLastName());
        user.setEmail(updateUser.getEmail());

        User updatedUserObj = userRepository.save(user);

        return UserMapper.mapToUserDto(updatedUserObj);
    }

    @Override
    public void deleteUser(Long userId) {

        User user = userRepository.findById(userId).orElseThrow(
                () -> new ResourceNotFoundException("Aucun utilisateur existe avec cet id : " + userId)
        );

        userRepository.deleteById(userId);

    }
}
