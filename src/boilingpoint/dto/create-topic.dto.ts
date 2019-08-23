import {
    IsString,
    IsInt,
    MinLength,
    MaxLength,
    Min,
} from 'class-validator';
import { BoilingPointConstants } from '../../constants/boilingpoint';

export class CreateTopicDto {
    @MinLength(1, {
        message: '名称不能为空',
    })
    @MaxLength(1, { // BoilingPointConstants.MAX_TOPIC_TITLE_LENGTH, {
        message: '名称不能超过 $constraint1 个字符',
    })
    @IsString()
    readonly name: string;

    @Min(1)
    @IsInt({
        message: '无效的序号',
    })
    readonly sequence: number;
}