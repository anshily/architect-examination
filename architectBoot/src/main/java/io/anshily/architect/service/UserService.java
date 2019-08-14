package io.anshily.architect.service;


import io.anshily.architect.base.core.Service;
import io.anshily.architect.model.User;

import java.util.List;
import java.util.Map;

/**
 * Created by anshi on 2019/08/02.
 */
public interface UserService extends Service<User> {
    User getUserInfoByToken(String token);

    List<User> loginByIdAndPass(String identify_card, String password);

    void addRoleToUser(int id, int role);

    Integer nameExist(String name);

    Map<String,Object> getStudyTime(Integer userid);

    void deleteUser(Integer userid);
}
