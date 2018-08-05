
export default function enumToStr(feature) {
    switch(feature) {
        case 1:
        return "朝";
        case 2:
        return "昼";
        case 3:
        return "夕・夜";
        case 4:
        return "おつまみ";
        case 5:
        return "お弁当";
        case 6:
        return "主食・丼";
        case 7:
        return "主菜";
        case 8:
        return "副菜";
        case 9:
        return "汁もの";
        case 10:
        return "スイーツ";
        case 11:
        return "ヘルシー";
        case 12:
        return "基本";
        case 13:
        return "一人前";
        default:
        return "Error";
    }
}