import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  readMore: boolean = false;
  demoText: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sapien leo, lacinia
  in enim non, luctus
  facilisis ex. Mauris accumsan mi quis lacus fermentum placerat. Praesent vitae ligula nec lectus fermentum
  blandit
  quis sit amet diam. Aliquam tempor lacinia libero, eu semper arcu. Sed massa orci, luctus sed nisl sed,
  placerat
  tincidunt orci. Nullam porttitor, lorem non euismod pulvinar, dui ipsum facilisis tellus, sed finibus nisl
  nisi in
  eros. Mauris commodo tortor ac gravida rutrum. Aliquam a ex vel enim porta porttitor id ultricies nibh.
  Phasellus ac
  odio nibh. Aenean maximus gravida elit, id pretium sapien laoreet non.

  Praesent vulputate purus quis erat rutrum commodo. Class aptent taciti sociosqu ad litora torquent per
  conubia
  nostra, per inceptos himenaeos. Sed maximus enim at nisl molestie, non maximus lorem fermentum. Mauris a
  eros eget
  magna sagittis porttitor. Integer tincidunt vestibulum viverra. Aliquam laoreet eget tortor ut aliquet.
  Curabitur ac
  commodo lectus. Nullam volutpat quis eros et mattis. Mauris commodo dignissim elit vel elementum. Nulla
  bibendum
  interdum urna eu ultrices. Vivamus mauris ante, suscipit ut est sit amet, tincidunt suscipit leo. Curabitur
  lacus
  tellus, mollis a interdum nec, malesuada eu enim. Morbi nec fermentum enim. Sed vel metus lorem.

  Sed pulvinar id eros vel ullamcorper. Mauris finibus ex in elit tincidunt, quis ultricies arcu posuere.
  Curabitur
  vulputate at sapien gravida vestibulum. Mauris tincidunt nibh non suscipit pharetra. Fusce varius eu diam
  non
  consequat. Suspendisse auctor quam ipsum, eu convallis purus bibendum sit amet. Donec id congue magna.
  Mauris
  faucibus sollicitudin nisl sit amet rhoncus. Vivamus quis augue et tortor ornare tempor a ut enim. In hac
  habitasse
  platea dictumst. Nullam eget malesuada tellus, ut rhoncus massa. Quisque velit diam, pulvinar ut maximus id,
  sagittis eget odio.

  Proin ut blandit nulla. Nulla facilisi. In eget mauris id turpis pharetra commodo non eget felis. Aliquam
  nisl nibh,
  lacinia nec quam et, tincidunt rhoncus nunc. Pellentesque malesuada augue vitae risus porttitor, eu auctor
  lectus
  eleifend. Praesent convallis lacus quam. Nunc in pellentesque magna, et ornare sapien. Praesent commodo
  venenatis
  accumsan. In malesuada facilisis nulla ut posuere. Vivamus neque ipsum, molestie a ullamcorper in, sodales
  sed
  justo.

  Aliquam sodales risus a ante hendrerit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et
  ultrices
  posuere cubilia curae; Quisque vel dui a ante fermentum egestas. Nunc quis magna hendrerit, lacinia mauris
  nec,
  varius ex. Etiam et enim fermentum, vehicula sapien ac, facilisis ex. Duis placerat dapibus imperdiet.
  Maecenas
  vestibulum convallis massa quis efficitur. Cras a pulvinar nisi. Aenean et congue sem. Nulla posuere
  imperdiet mi
  nec tempus. Nullam efficitur lobortis elit, a pellentesque urna pulvinar vel. In molestie est vitae urna
  lobortis
  porta. Integer fringilla rhoncus augue. Aliquam iaculis odio finibus libero accumsan pretium. Nunc id
  imperdiet
  nisl. Aliquam`;

  constructor() {}

  ngOnInit(): void {}
}
