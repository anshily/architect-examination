package io.anshily.architect.dao;

import io.anshily.architect.base.core.Mapper;
import io.anshily.architect.model.User;

public interface UserMapper extends Mapper<User> {
    User getUserInfoByToken(String token);
}