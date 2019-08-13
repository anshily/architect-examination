package io.anshily.architect.dao;

import io.anshily.architect.base.core.Mapper;
import io.anshily.architect.model.SignUp;

import java.util.List;

public interface SignUpMapper extends Mapper<SignUp> {
    List<SignUp> getSignUpMessage(int statu);
}