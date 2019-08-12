package io.anshily.architect.dao;

import io.anshily.architect.base.core.Mapper;
import io.anshily.architect.model.User;
import org.apache.ibatis.annotations.Param;

public interface UserMapper extends Mapper<User> {
    User getUserInfoByToken(String token);
    void addRoleToUser(@Param(value="id")int id,@Param(value="role")int role);
}