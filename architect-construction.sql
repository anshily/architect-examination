/*
Navicat MySQL Data Transfer

Source Server         : aliyun
Source Server Version : 50641
Source Host           : 47.93.226.47:3306
Source Database       : architect

Target Server Type    : MYSQL
Target Server Version : 50641
File Encoding         : 65001

Date: 2019-08-13 09:30:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for sw_answer
-- ----------------------------
DROP TABLE IF EXISTS `sw_answer`;
CREATE TABLE `sw_answer` (
  `question_item_id` int(10) NOT NULL,
  `question_bank_id` int(10) DEFAULT NULL COMMENT '答案对应的问题id',
  `name` varchar(255) DEFAULT NULL COMMENT '答案内容',
  `result` int(1) DEFAULT NULL COMMENT '正确性（1：正确，2：错误）',
  `index_number` int(1) DEFAULT NULL COMMENT '选项（1,2，3,4）',
  `index_letter` varchar(10) DEFAULT NULL COMMENT 'ABCD四个选项',
  PRIMARY KEY (`question_item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for sw_exam_answer
-- ----------------------------
DROP TABLE IF EXISTS `sw_exam_answer`;
CREATE TABLE `sw_exam_answer` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '答案表id',
  `examid` int(10) DEFAULT NULL COMMENT '对应考试信息表id',
  `question_title_id` int(10) DEFAULT NULL COMMENT '对应的体面id',
  `answer` varchar(255) DEFAULT NULL COMMENT '对应的题目答案',
  `istrue` int(1) DEFAULT '0' COMMENT '状态（1：正确，0：错误）',
  `add_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '新增时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7756 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for sw_exam_message
-- ----------------------------
DROP TABLE IF EXISTS `sw_exam_message`;
CREATE TABLE `sw_exam_message` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '考试信息表id',
  `userid` int(10) DEFAULT NULL COMMENT '考试信息表对应的用户id',
  `createtime` datetime DEFAULT NULL,
  `endtime` datetime DEFAULT NULL,
  `grade` int(5) DEFAULT NULL COMMENT '考试分数',
  `statu` int(1) DEFAULT '1' COMMENT '考试信息状态（1：可用，2：不可用）',
  `add_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '记录的添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for sw_permission
-- ----------------------------
DROP TABLE IF EXISTS `sw_permission`;
CREATE TABLE `sw_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(32) DEFAULT NULL COMMENT '权限名',
  `url` varchar(128) DEFAULT NULL COMMENT 'url',
  `controller` varchar(32) DEFAULT NULL COMMENT '控制器',
  `add_time` datetime DEFAULT NULL COMMENT '新增时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for sw_question
-- ----------------------------
DROP TABLE IF EXISTS `sw_question`;
CREATE TABLE `sw_question` (
  `question_bank_id` int(10) NOT NULL AUTO_INCREMENT,
  `question_type_id` int(10) DEFAULT NULL COMMENT '问题类型id  对应问题类型表',
  `question_title` text COMMENT '问题内容',
  `explanation` varchar(255) DEFAULT '' COMMENT '解析内容',
  `parent_id` int(10) DEFAULT NULL COMMENT '问题的父类id',
  `question_bank_category_id` int(10) DEFAULT NULL COMMENT '问题标签id',
  `name` varchar(255) DEFAULT NULL COMMENT '问题属于那一类型的题目（如A类）',
  `difficulty_degree` int(1) DEFAULT '1' COMMENT '难度等级（默认为1级）',
  `isclose` int(1) DEFAULT '0' COMMENT '是否关闭（0：未关闭，1：关闭）',
  `isdelete` int(1) DEFAULT '0' COMMENT '是否删除（0：未删除，1：已删除）',
  PRIMARY KEY (`question_bank_id`)
) ENGINE=InnoDB AUTO_INCREMENT=46293 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for sw_question_title
-- ----------------------------
DROP TABLE IF EXISTS `sw_question_title`;
CREATE TABLE `sw_question_title` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `exam_id` int(10) DEFAULT NULL COMMENT '对应考试信息表的id',
  `question_id` int(10) DEFAULT NULL COMMENT '对应的考试题目id',
  `statu` int(1) DEFAULT '1' COMMENT '状态（1：可用，0：不可用）',
  `add_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '新增时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6005 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for sw_question_type
-- ----------------------------
DROP TABLE IF EXISTS `sw_question_type`;
CREATE TABLE `sw_question_type` (
  `question_type_id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT '问题类型名称（如A类）',
  `statu` int(1) DEFAULT '1' COMMENT '状态（1：可用，0：不可用）',
  `add_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`question_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for sw_role
-- ----------------------------
DROP TABLE IF EXISTS `sw_role`;
CREATE TABLE `sw_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(32) DEFAULT NULL COMMENT '角色名',
  `category` int(2) DEFAULT NULL COMMENT 'category_id',
  `info` text COMMENT '角色描述',
  `add_time` datetime DEFAULT NULL COMMENT '新增时间',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for sw_role_permission
-- ----------------------------
DROP TABLE IF EXISTS `sw_role_permission`;
CREATE TABLE `sw_role_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `rid` int(11) DEFAULT NULL COMMENT '角色id',
  `pid` int(11) DEFAULT NULL COMMENT '权限id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for sw_sign_up
-- ----------------------------
DROP TABLE IF EXISTS `sw_sign_up`;
CREATE TABLE `sw_sign_up` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `company_name` varchar(255) DEFAULT '' COMMENT '公司名称',
  `work_type` varchar(255) DEFAULT '' COMMENT '报名工种',
  `name` varchar(255) DEFAULT '' COMMENT '用户姓名',
  `phone` varchar(20) DEFAULT '' COMMENT '电话',
  `subscribe` text COMMENT '描述',
  `statu` int(1) DEFAULT '1' COMMENT '状态（1：可用，0，不可用，2：已读状态）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for sw_simple_test
-- ----------------------------
DROP TABLE IF EXISTS `sw_simple_test`;
CREATE TABLE `sw_simple_test` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '普通练题id',
  `user_id` int(10) DEFAULT NULL,
  `question_id` int(10) DEFAULT NULL COMMENT '题目id',
  `answer` varchar(255) DEFAULT NULL COMMENT '对应的答案',
  `istrue` int(1) DEFAULT '0' COMMENT '正确性（0：错误，1：正确）',
  `statu` int(1) DEFAULT '1' COMMENT '状态（1：可用，0：不可用）',
  `add_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '新增时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=417 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for sw_user
-- ----------------------------
DROP TABLE IF EXISTS `sw_user`;
CREATE TABLE `sw_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `open_id` varchar(32) DEFAULT NULL COMMENT 'openid',
  `identify_card` varchar(32) DEFAULT NULL COMMENT '身份证号',
  `username` varchar(32) DEFAULT NULL COMMENT '用户名',
  `password` varchar(32) DEFAULT '123456' COMMENT '密码',
  `email` varchar(64) DEFAULT NULL COMMENT '电子邮件',
  `phone` varchar(11) DEFAULT NULL COMMENT '电话',
  `nickname` varchar(32) DEFAULT NULL COMMENT '昵称',
  `avatar` varchar(128) DEFAULT NULL COMMENT '头像',
  `token` varchar(64) DEFAULT NULL COMMENT 'token',
  `salt` varchar(16) DEFAULT NULL COMMENT '盐',
  `add_time` datetime DEFAULT NULL COMMENT '添加时间',
  `update_time` datetime DEFAULT NULL COMMENT '最后登录时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for sw_user_role
-- ----------------------------
DROP TABLE IF EXISTS `sw_user_role`;
CREATE TABLE `sw_user_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `uid` int(11) DEFAULT NULL COMMENT '用户id',
  `rid` int(11) DEFAULT NULL COMMENT '角色id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4;
