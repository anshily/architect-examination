package io.anshily.architect.service.impl;

import io.anshily.architect.base.core.AbstractService;
import io.anshily.architect.dao.UserMapper;
import io.anshily.architect.model.User;
import io.anshily.architect.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;


/**
 * Created by anshi on 2019/08/02.
 */
@Service
@Transactional
public class UserServiceImpl extends AbstractService<User> implements UserService {
    @Resource
    private UserMapper swUserMapper;

    @Override
    public User getUserInfoByToken(String token) {
        return swUserMapper.getUserInfoByToken(token);
    }

    @Override
    public void addRoleToUser(int id, int role) {
        swUserMapper.addRoleToUser(id,role);
    }
}
