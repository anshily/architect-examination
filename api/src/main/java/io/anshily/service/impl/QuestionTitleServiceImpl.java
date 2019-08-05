package io.anshily.service.impl;

import io.anshily.dao.QuestionTitleMapper;
import io.anshily.model.QuestionTitle;
import io.anshily.service.QuestionTitleService;
import io.anshily.base.core.AbstractService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;


/**
 * Created by anshi on 2019/08/05.
 */
@Service
@Transactional
public class QuestionTitleServiceImpl extends AbstractService<QuestionTitle> implements QuestionTitleService {
    @Resource
    private QuestionTitleMapper swQuestionTitleMapper;

}
