import { getCurTime } from "@/util/getCurTime";

export default [
    {
        iconText: getCurTime('day'),
        tabText: '当天',
        path: '/'
    },
    {
        iconText: getCurTime('month'),
        tabText: '近期',
        path: '/month'
    },
    {
        iconText: getCurTime('year'),
        tabText: '当年',
        path: '/year'
    }
];