package io.anshily.architect.service;


import io.anshily.architect.base.core.Service;
import io.anshily.architect.model.User;

/**
 * Created by anshi on 2019/08/02.
 */
public interface UserService extends Service<User> {
    User getUserInfoByToken(String token);
    void addRoleToUser(int id,int role);
}
