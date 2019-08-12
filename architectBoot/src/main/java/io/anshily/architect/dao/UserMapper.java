package io.anshily.architect.dao;

import io.anshily.architect.base.core.Mapper;
import io.anshily.architect.model.User;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserMapper extends Mapper<User> {
    User getUserInfoByToken(String token);
    List<User> loginByIdAndPass(@Param(value="identify_card") String identify_card, @Param(value="password") String password);
    void addRoleToUser(@Param(value="id")int id,@Param(value="role")int role);
    User nameExist(String name);
}