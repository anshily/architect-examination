package io.anshily.architect.service.impl;

import io.anshily.architect.base.core.AbstractService;
import io.anshily.architect.dao.AnswerMapper;
import io.anshily.architect.model.Answer;
import io.anshily.architect.service.AnswerService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;


/**
 * Created by anshi on 2019/08/01.
 */
@Service
@Transactional
public class AnswerServiceImpl extends AbstractService<Answer> implements AnswerService {
    @Resource
    private AnswerMapper swAnswerMapper;

}
