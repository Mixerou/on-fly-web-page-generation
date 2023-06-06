use html_parser::Dom;
use wasm_bindgen::prelude::*;

#[wasm_bindgen(js_name = convertPugToJson)]
pub fn convert_pug_to_json(pug: &str) -> String {
    let mut html = Vec::new();

    pug::parse(pug)
        .expect("Error to parse Pug")
        .to_html(&mut html)
        .expect("Error to convert Pug to HTML");

    let html = String::from_utf8(html).expect("Error to convert bytes to String");

    Dom::parse(html.as_str())
        .expect("Error to parse HTML")
        .to_json()
        .expect("Error to convert Dom to JSON")
}

#[cfg(test)]
mod tests {
    use wasm_bindgen_test::*;

    use super::*;

    wasm_bindgen_test_configure!(run_in_browser);

    #[wasm_bindgen_test]
    fn pug_to_json() {
        convert_pug_to_json(
            r#"
page
  title Files

components
  card(icon='folder')
    div(border='medium')
      column
        icon(color='ffaf59') #{icon}
        txt(nowrap='') #{name}
        txt(dim='') #{size} • #{info}

widgets
  favourite
    row(justify-content='between')
      h1 Quick Access
      menu.kebab
        btn.danger Hide Widget
    row
      c.card(name='Studio Work', size='2.3 GB', info='23 items')
      c.card(name='Source', size='1.6 GB', info='1 item')
      c.card(name='Brand Assets', size='341 MB', info='8 items')
      c.card(icon='file', name='Great Studio', size='12.3 MB', info='pptx')
        "#,
        );
    }
}
