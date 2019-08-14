package io.anshily.architect.service.impl;

import io.anshily.architect.base.core.AbstractService;
import io.anshily.architect.dao.UserMapper;
import io.anshily.architect.model.ExamMessage;
import io.anshily.architect.model.SimpleTest;
import io.anshily.architect.model.User;
import io.anshily.architect.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


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
    public List<User> loginByIdAndPass(String identify_card, String password) {
        return swUserMapper.loginByIdAndPass(identify_card, password);
    }

    @Override
    public void addRoleToUser(int id, int role) {
        swUserMapper.addRoleToUser(id,role);
    }

    @Override
    public Integer nameExist(String name) {
        User user=swUserMapper.nameExist(name);
        if(null==user){
            return 0;
        }
        return 1;
    }

    @Override
    public Map<String, Object> getStudyTime(Integer userid) {
        /*获取当前用户最后一场考试的开始时间*/
        ExamMessage examMessage=swUserMapper.getExamStartTime(userid);
        /*获取当前用户最后一次练题的时间*/
        SimpleTest simpleTest=swUserMapper.getSimpleTestTime(userid);
        Map<String,Object> map=new HashMap<String,Object>();
        map.put("ExamStartTime",examMessage);
        map.put("SimpleTestTime",simpleTest);
        return map;
    }

    @Override
    public void deleteUser(Integer userid) {
        swUserMapper.deleteUser(userid);
    }
}
