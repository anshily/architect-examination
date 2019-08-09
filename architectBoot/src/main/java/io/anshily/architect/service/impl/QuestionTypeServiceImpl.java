package io.anshily.architect.service.impl;

import io.anshily.architect.base.core.AbstractService;
import io.anshily.architect.dao.QuestionTypeMapper;
import io.anshily.architect.model.QuestionType;
import io.anshily.architect.service.QuestionTypeService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;


/**
 * Created by anshi on 2019/08/05.
 */
@Service
@Transactional
public class QuestionTypeServiceImpl extends AbstractService<QuestionType> implements QuestionTypeService {
    @Resource
    private QuestionTypeMapper swQuestionTypeMapper;

}
