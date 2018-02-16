import React, {Component} from 'react';
import axios from 'axios'
import { Input,Tabs,Pagination,BackTop,Tag,message,Modal,Button,Rate  } from 'antd';
import {changeKeyword,changeMenu} from 'actions/appState';
import {connect} from 'react-redux';
import ListItem from 'component/ListItem/ListItem'
import styles from './SearchPage.css'
const { TabPane } = Tabs;
const Search = Input.Search;
const pageSize = 15;
class SearchPage extends Component {
    state = {
        tag:"全部",
        modelVisible:false,
        dataList:[],
        currentDataList:[],
        currentPage:1,
        downloadTarget:null
    }
    componentWillMount(){
        if(this.props.location.pathname === '/search-page'){
            this.props.changeMenu('search')
        }
        if (this.props.location.state && this.props.location.state.keyword){
            this.state.tag = this.props.location.state.keyword
        }else{
            this.state.tag = "全部"
        }
        this.loadListData(this.state.tag)
    }

    loadListData(keyword){
        let that = this
        axios({
            method:'post',
            url:'/getSoftData',
            data:{
                keyword:keyword,
            }
          }).then(function(response) {
                that.setState({
                    dataList:response.data.array,
                    currentDataList:response.data.array.slice(0,pageSize),
                 })
          }).then(function(error){
            console.log(error)
          });
    }
    searchClickHandle(value){
        if(value){
            this.setState({
                tag:value
            })
            this.props.changeKeyword(value)
            
            this.loadListData(value);
        }else{
            message.info('请输入搜索的关键词！');
        }
    }
    handleChange(value){
        if(value){
            this.setState({
                tag:value
            })
            this.props.changeKeyword(value)
        }else{
            message.info('请输入搜索的关键词！');
        }
    }

    showModal = () => {
        this.setState({
          modelVisible: false,
        });
    }
    handleOk = (e) => {
        this.setState({
            modelVisible: false,
        });
    }
    handleCancel = (e) => {
        this.setState({
            modelVisible: false,
        });
    }
    downloadClickHandle(item){
        console.log(item)
        this.setState({
            modelVisible:true,
            downloadTarget:item
        })
    }

    pageNumChanged(num){
        this.setState({
            currentDataList:this.state.dataList.slice((num-1)*pageSize,pageSize*num)
         })
    }
    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.title_wrapper}>
                    <span>关键词：</span>
                    <div className={styles.search_wrapper}>
                        <Search
                            placeholder="input search keyword"
                            onSearch={(value) => this.searchClickHandle(value)}
                            enterButton="Search"
                            size="large"
                        />   
                    </div>
                </div>
                <div className={styles.condition_wrapper}>
                    <span>当前关键词：</span>
                    <Tag color="#1890ff">{this.state.tag}</Tag>
                </div>
                <div className={styles.content_wrapper}>
                    <Tabs defaultActiveKey="1" size={"default"}>
                        <TabPane tab="下载热度" key="1">
                            {this.state.currentDataList.map((item,index)=><ListItem data = {item} clickHandle = {()=>this.downloadClickHandle(item)} key = {index}/>)}
                        </TabPane>
                        
                    </Tabs>
                    <div className={styles.pagination_wrapper}>
                        <Pagination showQuickJumper defaultPageSize={pageSize} defaultCurrent={1} total={this.state.dataList.length} onChange={(pageNumber)=>this.pageNumChanged(pageNumber)} />
                    </div>
                    
                </div>
                <BackTop />
                <Modal
                    visible={this.state.modelVisible}
                    title={this.state.downloadTarget?this.state.downloadTarget.name:""}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <div key="star" className={styles.star} >
                            <span>资源评分:</span>
                            <Rate  onChange={(value)=>console.log(value)}/>
                        </div>,
                        <Button key="back" >取消</Button>,
                        <Button key="submit" type="primary" >
                        下载
                        </Button>,
                    ]}
                >
                    <p className={styles.model_abstract}>{this.state.downloadTarget?this.state.downloadTarget.abstract:""}</p>
                    <div className={styles.model_detail}>
                        <div className={styles.version_area}>
                            <span className={styles.detail_tile}>版本信息：</span>
                            <span className={styles.color_font_green} >{this.state.downloadTarget?this.state.downloadTarget.version:""}</span> 
                        </div>
                        
                        <ul>
                            <li>
                                <span className={styles.detail_tile}>下载次数：</span>
                                <span className={styles.color_font} >{this.state.downloadTarget?this.state.downloadTarget.downloadTimes:""}</span> 
                            </li>
                            
                            <li>
                                <span className={styles.detail_tile}>上传时间：</span>
                                <span className={styles.color_font}>{this.state.downloadTarget?this.state.downloadTarget.uploadTime:""}</span>
                            </li>
                            <li>
                                <span className={styles.detail_tile}>大小：</span>
                                <span className={styles.blue_pill}>{this.state.downloadTarget?this.state.downloadTarget.size:""}MB</span>
                            </li>
                        </ul>
                    </div>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        appState: state.appState,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        changeKeyword: (keyword) => {
            dispatch(changeKeyword(keyword))
        },
        changeMenu: (index) => {
            dispatch(changeMenu(index))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);