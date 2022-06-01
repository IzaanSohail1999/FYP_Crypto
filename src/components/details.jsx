import img from "./FeatureSelectionMDI.png"
import img1 from "./LSTMFlow.png"
import img2 from "./LSTMArchitecture.png"
import img3 from "./cusum.png"

export const Details = (props) => {
  return (
    <div id='services' >
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Details</h2>
        </div>
        <div>
          <div className='row text-center' >
            <i className={"fa fa-database text-center"} ></i>
            <h3><b>Extract Data</b></h3>
          </div>
          <div className='service-desc'>
            <p>A web scraper written in Python 3.6 was used to obtain data about Bitcoin and Ethereum from https://bitinfocharts.com.</p>
            <p>The data for both currencies was analyzed in three different intervals: </p>
            <p>i) 2013 April 1 - 2016 April 1</p>
            <p>ii) 2013 April 1 -  2017 April 1</p>
            <p>iii) 2013 April 1 -  2019 December 31st</p>
            <p>These 3 intervals were used to extract more than 700 technical indicators were included in the data.  Simple Moving Average (SMA), Exponential Moving Average (EMA), Relative Strength Index (RSI), Weighted Moving Average (WMA), Standard Deviation (STD), Variance (VAR), Triple Moving Exponential (TRIX), and Rate of Change(ROC)  are some of the technical indicators. These technical indicators are calculated over three, seven, fourteen, thirty, and ninety days.The end-of-day closing prices are regarded as raw values. Technical indicators display properties not immediately apparent in raw data, such as variances and standard deviations as a function of time. These technical indicators were created to display these aspects in the BTC and ETH price time-series. For example, instead of merely showing the raw transactions and hashrates, they illustrate how the ETH or BTC price is related to the standard deviation of the transactions or hashrate across 14 day intervals.</p>
          </div>
        </div>
        <div>
          <div className='row text-center' >
            <i className={"fa fa-filter text-center"} ></i>
            <h3><b>Process Data</b></h3>
          </div>
          <div className='service-desc'>
            <p>In Data preprocessing a number of steps were done to clean and scale the data. Sklearn Simple imputer was used to fill the missing data in the dataframe using the most frequently used strategy and fit transform together to increase model accuracy.The cleaned data was then turned into a data frame, resulting in a two-dimensional data set with rows and columns.Using the sklearn library function train test split, the data was split into test and train groups, with the test size set to 33% of the total data and random state of 42 to control the  shuffling before splitting data. The features were scaled using the minmax scaler for training the LSTM model. The features are shifted between 0 and 1 with the minmax scaling, while the relative magnitude of the outliers is preserved. The shape of the original distribution is preserved by MinMaxScaler. It has no effect on the information included in the original data.</p>
          </div>
        </div>
        <div>
          <div className='row text-center' >
            <i className={"fa fa-cubes text-center"} ></i>
            <h3><b>Feature Selection (MDI)</b></h3>
          </div>
          <div className='service-desc'>
            <p>Feature selection improves the machine learning process and increases the predictive power of machine learning algorithms by selecting the most important variables and eliminating redundant and irrelevant features. It is necessary to improve model performance. Several alternative approaches were used to extract and prune features iteratively.Firstly, RandomForestRegressor was initialized to fit a number of classifying decision trees on various sub-samples of the dataset and uses averaging to improve the predictive accuracy and control over-fitting.The <b style={{ color: "red" }}><u>bootstrap</u></b> was set to False thus the whole dataset was used to build each tree and the estimator was set to default.</p>
            <p>Next Impurity-based feature importance of RandomForestClassifier was implemented followed by Sklearns permutation_importance feature selection to improve accuracy and select best features to be fed to the model. Permutation Importance returns us importances mean which is stored in a sorted manner using the formula given below : </p>
            <p className="text-center"> <b>importances_mean - 2 * importances_std {">"} 0</b></p>
            <p>where std stands for standard deviation. If the condition is met then the feature is appended into the selected list of features. </p>
            <p>Random forests is an ensemble learning method for regression and other problems that works by training a large number of decision trees. The mean or average prediction of the individual trees is returned for regression tasks. A random forest, unlike a single decision tree, may forecast using hundreds of trees, yielding better results. It does not necessitate substantial training and is suitable for small datasets and quick evaluation. One of the most extensively used measures of feature relevance, Mean Decrease Impurity (MDI), wrongly allocates high importance to noisy features, resulting in systematic bias in feature selection.</p>
            <p>The improvement in the Gini gain splitting criterion, which contains a weighted mean of the individual trees improvement in the splitting criterion created by each variable, is described by the mean decrease in impurity (Gini) significance metric. The Gini impurity index is calculated as follows:</p>
            <div className="text-center">
              <img src={img} height="100" width="400" />
            </div>
            <br />
            <p>where nc represents the number of classes in the target variable and pi represents the class ratio. In other words, it measures the disorder of a set of elements. It is calculated as the probability of mislabeling an element assuming that the element is randomly labeled according to the distribution of all the classes in the set</p>
          </div>
        </div>
        <div>
          <div className='row text-center' >
            <i className={"fa fa-cubes text-center"} ></i>
            <h3 style={{color:"red"}}><b>Feature Selection (WRAPPER) The text below must be editted</b></h3>
          </div>
          <div className='service-desc'>
            <p>Feature selection improves the machine learning process and increases the predictive power of machine learning algorithms by selecting the most important variables and eliminating redundant and irrelevant features. It is necessary to improve model performance. Several alternative approaches were used to extract and prune features iteratively.Firstly, RandomForestRegressor was initialized to fit a number of classifying decision trees on various sub-samples of the dataset and uses averaging to improve the predictive accuracy and control over-fitting.The <b style={{ color: "red" }}><u>bootstrap</u></b> was set to False thus the whole dataset was used to build each tree and the estimator was set to default.</p>
            <p>Next Impurity-based feature importance of RandomForestClassifier was implemented followed by Sklearns permutation_importance feature selection to improve accuracy and select best features to be fed to the model. Permutation Importance returns us importances mean which is stored in a sorted manner using the formula given below : </p>
            <p className="text-center"> <b>importances_mean - 2 * importances_std {">"} 0</b></p>
            <p>where std stands for standard deviation. If the condition is met then the feature is appended into the selected list of features. </p>
            <p>Random forests is an ensemble learning method for regression and other problems that works by training a large number of decision trees. The mean or average prediction of the individual trees is returned for regression tasks. A random forest, unlike a single decision tree, may forecast using hundreds of trees, yielding better results. It does not necessitate substantial training and is suitable for small datasets and quick evaluation. One of the most extensively used measures of feature relevance, Mean Decrease Impurity (MDI), wrongly allocates high importance to noisy features, resulting in systematic bias in feature selection.</p>
            <p>The improvement in the Gini gain splitting criterion, which contains a weighted mean of the individual trees improvement in the splitting criterion created by each variable, is described by the mean decrease in impurity (Gini) significance metric. The Gini impurity index is calculated as follows:</p>
            <div className="text-center">
              <img src={img} height="100" width="400" />
            </div>
            <br />
            <p>where nc represents the number of classes in the target variable and pi represents the class ratio. In other words, it measures the disorder of a set of elements. It is calculated as the probability of mislabeling an element assuming that the element is randomly labeled according to the distribution of all the classes in the set</p>
          </div>
        </div>
        <div>
          <div className='row text-center' >
            <i className={"fa fa-gears text-center"} ></i>
            <h3><b>BiDirectional LSTM</b></h3>
          </div>
          <div className='service-desc'>
            <p>We predicted the bitcoin and Ethereum prices using the BiDirectional LSTM model. An LSTM network is a type of recurrent neural network (RNN) that can learn long-term dependencies between time steps of sequence data.This deep learning model is very beneficial for time-series data modeling and forecasting. Because the daily Bitcoin and Ethereum price and its characteristics are time series data, LSTM may be used to make price forecasts. The diagram below illustrates the architecture of a simple LSTM network for regression. The network starts with a sequence input layer followed by an LSTM layer. The network ends with a fully connected layer and a regression output layer.A common LSTM unit is composed of a cell, an input gate (i), an output gate (o) and a forget gate (f). The cell remembers values over arbitrary time intervals and the three gates regulate the flow of information into and out of the cell. The equations for the gates, cell state , candidate cell state and the final output in LSTM are given by:</p>
            <div className="text-center">
              <img src={img1} height="400" width="500" />
              <br/><br/>
              <img src={img2} height="300" width="600" />
            </div>
            </div>
        </div>
        <div>
          <div className='row text-center' >
            <i className={"fa fa-binoculars text-center"} ></i>
            <h3><b>Comparison</b></h3>
          </div>
          <div className='service-desc text-center'>
            <h2 style={{color: "red"}}><b>To Be Written..</b></h2>
            </div>
        </div>
        <div>
          <div className='row text-center' >
            <i className={"fa fa-line-chart text-center"} ></i>
            <h3><b>Monitor Model Performance</b></h3>
          </div>
          <div className='service-desc'>
            <p>A successful forecasting system design includes developing and executing processes to monitor the performance of the forecasting model. Regardless of how well the forecasting model initially performs, It is expected that its performance may decline over time. The time series pattern may shift due to internal inertial forces. The forces that drive the process may change over time or as a result of external factors and  additional clients entering the market. A change in the level or slope of the variable being projected, for example, could occur. It's also feasible that the data's intrinsic unpredictability will rise. As a result, performance monitoring is critical. A cumulative sum (CUSUM) chart is a type of control chart used to monitor small shifts in the process mean. It uses the cumulative sum of deviations from a target.The CUSUM chart plots the cumulative sum of deviations from the target for individual measurements or subgroup means.The CUSUM is highly useful in detecting changes in the monitored variable's level. It operates by accumulating deviations above the desired goal value To (typically zero or the average forecast error) with one statistic <b style={{color:"red"}}>C+</b> and deviations below the target with another statistic <b style={{color:"red"}}>C</b>. The higher and lower CUSUMs are the statistics <b style={{color:"red"}}>C+ and C</b>, respectively. For implementing CUSUM on our models firstly variance of the entire list of predicted values was calculated along with standard-deviation(std). After which the std was divided by the number(n) of values predicted and boundary limits were defined by multiplying the standard-deviation with 3. A graph represented below was plotted representing all predicted values along with upper and lower limit to determine how many values fell in range.Depending on the number of values in range it is decided where to train the model again with recent data to get improved accuracy and precision in predicted values.</p>
            <div className="text-center">
              <img src={img3} height="800" width="900" />
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}
