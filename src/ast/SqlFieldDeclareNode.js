var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
///<reference path="SqlNode.ts"/>
/**
 * 字段声明节点。
 */
var SqlFieldDeclareNode = /** @class */ (function (_super) {
    __extends(SqlFieldDeclareNode, _super);
    function SqlFieldDeclareNode(parent, value, line) {
        return _super.call(this, parent, value, line) || this;
    }
    SqlFieldDeclareNode.prototype.create = function () {
        return new SqlFieldDeclareNode(null, null, null);
    };
    return SqlFieldDeclareNode;
}(SqlNode));
