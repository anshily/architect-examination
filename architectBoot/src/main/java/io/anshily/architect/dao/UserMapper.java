package io.anshily.architect.dao;

import io.anshily.architect.base.core.Mapper;
import io.anshily.architect.model.ExamMessage;
import io.anshily.architect.model.SimpleTest;
import io.anshily.architect.model.User;
import org.apache.ibatis.annotations.Param;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Map;

public interface UserMapper extends Mapper<User> {
    User getUserInfoByToken(String token);
    List<User> loginByIdAndPass(@Param(value="identify_card") String identify_card, @Param(value="password") String password);
    void addRoleToUser(@Param(value="id")int id,@Param(value="role")int role);
    User nameExist(String name);
    String getExamStartTime(int userid);
    String getSimpleTestTime(int userid);
    void deleteUser(Integer userid);
}