package io.anshily.architect.service.impl;

import io.anshily.architect.base.core.AbstractService;
import io.anshily.architect.dao.AnswerMapper;
import io.anshily.architect.model.Answer;
import io.anshily.architect.service.AnswerService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;


/**
 * Created by anshi on 2019/08/01.
 */
@Service
@Transactional
public class AnswerServiceImpl extends AbstractService<Answer> implements AnswerService {
    @Resource
    private AnswerMapper swAnswerMapper;

    @Override
    public void test() {
        /*查询出所有判断题的id*/
        List<Integer> l=swAnswerMapper.getAnswer();
        /*根据id查询出答案*/
        for (Integer i:l) {
            List<Answer> list=swAnswerMapper.getAnswerById(i);
            if(list.size()!=0){
                Answer a=list.get(0);
                if(a.getName().equals("错误")){
                    swAnswerMapper.A(a.getQuestion_item_id());
                    swAnswerMapper.B(list.get(1).getQuestion_item_id());
                }
            }
        }
        /*判断第一条数据是否是错误*/

        /*更新内容*/
    }
}
