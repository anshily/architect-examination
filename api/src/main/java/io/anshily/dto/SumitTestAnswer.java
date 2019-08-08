package io.anshily.dto;

import io.anshily.model.SimpleTest;

public class SumitTestAnswer {
    String token;
    SimpleTest simpleTest;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public SimpleTest getSimpleTest() {
        return simpleTest;
    }

    public void setSimpleTest(SimpleTest simpleTest) {
        this.simpleTest = simpleTest;
    }
}
