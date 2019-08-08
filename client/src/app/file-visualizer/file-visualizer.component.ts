import { Component, OnInit } from '@angular/core';
import { ThermometerService } from '../thermometer.service';
import { StockChart } from 'angular-highcharts';
import * as jsonpack from 'jsonpack'
import * as Highcharts from 'highcharts';
import theme from 'highcharts/themes/dark-unica';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-file-visualizer',
  templateUrl: './file-visualizer.component.html',
  styleUrls: ['./file-visualizer.component.scss']
})
export class FileVisualizerComponent implements OnInit {
  public files: Array<object>
  public loading = false
  public chart: any;
  public downloadedMb = 0;
  public noFileSelected = true;
  public noFileUploaded = false;
  public chartIsLoading: boolean;


  private graphFormatedData = {
    chart: {
      type: 'line'
    },
    boost: {
      useGPUTranslations: true
    },
    title: {
      text: 'Linechart'
    },
    xAxis: {
      minRange: 10000
    },

    credits: {
      enabled: false
    },
    series: [],
    showLoading: true,
  };

  constructor(private service: ThermometerService) { }

  ngOnInit() {
    StockChart
    // theme(Highcharts)
    this.service.getFiles().subscribe((data: any) => {

      this.files = data;
      if (this.files.length === 0) {
        this.noFileUploaded = true;
      }
    }, (err) => { console.log(err) })

  }

  __updateGraphObject(data, fileName) {
    this.graphFormatedData.title.text = fileName;
    this.graphFormatedData.series = [{
      type: "line",
      tooltip: {
        valueDecimals: 2
      },
      name: fileName,
      data: data
    }];
    this.chartIsLoading = true;
    this.chart = new StockChart(this.graphFormatedData)
    this.chartIsLoading = false;
    console.log(this.chart)

  }

  selectFile(fileName) {
    this.noFileSelected = false
    this.loading = true
    this.service.getFileData(fileName).subscribe((response: any) => {
      if (response.type === HttpEventType.DownloadProgress) {
        // This is an download progress event. Compute and show the % done:
        this.downloadedMb = Math.round(response.loaded / 1048576);
        console.log(response)

      }
      else if (response instanceof HttpResponse) {
        this.__updateGraphObject(response.body, fileName)
        this.loading = false;
      }

    })
  }
}
