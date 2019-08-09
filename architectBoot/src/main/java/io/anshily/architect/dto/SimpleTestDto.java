package io.anshily.architect.dto;

import io.anshily.architect.model.SimpleTest;

/**
 * Created by ASUS on 2019/8/7.
 */
public class SimpleTestDto {
    private String token;
    private SimpleTest simpleTest;

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
