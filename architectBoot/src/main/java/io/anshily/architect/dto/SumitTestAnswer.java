package io.anshily.architect.dto;


import io.anshily.architect.model.SimpleTest;

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
