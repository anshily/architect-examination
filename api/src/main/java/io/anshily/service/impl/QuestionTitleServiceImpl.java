package io.anshily.service.impl;

import io.anshily.base.core.ServiceException;
import io.anshily.dao.QuestionTitleMapper;
import io.anshily.model.QuestionTitle;
import io.anshily.model.User;
import io.anshily.service.QuestionTitleService;
import io.anshily.base.core.AbstractService;
import io.anshily.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;


/**
 * Created by anshi on 2019/08/05.
 */
@Service
@Transactional
public class QuestionTitleServiceImpl extends AbstractService<QuestionTitle> implements QuestionTitleService {
    @Resource
    private QuestionTitleMapper swQuestionTitleMapper;
    @Resource
    private UserService userService;

    @Override
    public List<QuestionTitle> getQuestionTitleByExamid(String token, Integer examid) {
        /*根据用户token获取用户的id*/
        User user=userService.getUserInfoByToken(token);
        if (user == null){
            throw new ServiceException(3002,"用户未登录！");
        }
        /*根据用户id examid查询出题面表的数据*/
        List<QuestionTitle> list=swQuestionTitleMapper.getQuestionTitleByExamid(user.getId(),examid);
        return list;
    }
}
