/*
Navicat MySQL Data Transfer

Source Server         : aliyun
Source Server Version : 50641
Source Host           : 47.93.226.47:3306
Source Database       : architect

Target Server Type    : MYSQL
Target Server Version : 50641
File Encoding         : 65001

Date: 2019-08-13 09:34:02
*/

SET FOREIGN_KEY_CHECKS=0;

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
-- Records of sw_role
-- ----------------------------
INSERT INTO `sw_role` VALUES ('1', 'A类（企业负责人）', '12', 'category：12', null, null);
INSERT INTO `sw_role` VALUES ('2', 'B类（项目负责人）', '13', 'category：13', null, null);
INSERT INTO `sw_role` VALUES ('3', 'C类（专职安全管理员）', '14', 'category：14', null, null);
INSERT INTO `sw_role` VALUES ('4', '特种工', '15', 'category：15', null, null);
INSERT INTO `sw_role` VALUES ('5', '安监特种工', '16', 'category：16', null, null);
INSERT INTO `sw_role` VALUES ('6', '七大员', '17', 'category：17', null, null);
INSERT INTO `sw_role` VALUES ('7', '中专学历', '18', 'category：18', null, null);
INSERT INTO `sw_role` VALUES ('8', '大专本科学历', '19', 'category：19', null, null);
INSERT INTO `sw_role` VALUES ('9', '助工', '20', 'category：20', null, null);
INSERT INTO `sw_role` VALUES ('99', 'admin', '1', null, null, null);
