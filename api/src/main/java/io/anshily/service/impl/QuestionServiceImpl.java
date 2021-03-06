package io.anshily.service.impl;

import io.anshily.dao.QuestionMapper;
import io.anshily.model.Question;
import io.anshily.service.QuestionService;
import io.anshily.base.core.AbstractService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;


/**
 * Created by anshi on 2019/08/01.
 */
@Service
@Transactional
public class QuestionServiceImpl extends AbstractService<Question> implements QuestionService {
    @Resource
    private QuestionMapper swQuestionMapper;

    @Override
    public List<Question> getRandomQuestionsByTypeCategoryN(Integer type, Integer category, Integer n) {
        return swQuestionMapper.getRandomQuestionsByTypeCategoryN(type,category,n);
    }
}
