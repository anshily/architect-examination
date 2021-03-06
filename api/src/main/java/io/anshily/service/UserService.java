package io.anshily.service;
import io.anshily.model.User;
import io.anshily.base.core.Service;

import java.util.List;


/**
 * Created by anshi on 2019/08/02.
 */
public interface UserService extends Service<User> {
    User getUserInfoByToken(String token);
}
