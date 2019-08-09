package io.anshily.architect.service.impl;

import io.anshily.architect.base.core.AbstractService;
import io.anshily.architect.dao.QuestionMapper;
import io.anshily.architect.model.Question;
import io.anshily.architect.service.QuestionService;
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
