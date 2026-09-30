import type { Metadata } from "next";
import Link from "next/link";
import {
  BulletList,
  Callout,
  ContactBox,
  LegalDocument,
  LegalSection,
  LegalSubheading,
} from "../../_components/LegalDocument";
import { coinlyPaths } from "../../_components/constants";

export const metadata: Metadata = {
  title: "プライバシーポリシー - アルコイン",
  description: "iOSアプリ「アルコイン - かんたん家計簿」のプライバシーポリシーです。",
};

export default function Page() {
  return (
    <LegalDocument
      lang="ja"
      title="プライバシーポリシー"
      updated="最終更新日: 2026年9月30日"
      note="本ポリシーは、アルコイン 2.0.0 の配信開始時から適用されます。"
      otherLang={{ href: coinlyPaths.privacy.en, label: "English" }}
      intro={
        <>
          <Callout title="個人の家計簿は、あなたのiPhoneの中だけに">
            <p>
              個人家計簿のデータは端末内にのみ保存され、運営者のサーバーに送信されることはありません。共有家計簿を使うときに限り、共有に必要な情報を運営者のサーバーで取り扱います。広告、アナリティクス、トラッキングは一切使用せず、データを販売することもありません。
            </p>
          </Callout>
          <p className="text-body-md text-black-600">
            Bluedog（以下「運営者」といいます）は、iOSアプリ「アルコイン -
            かんたん家計簿」（英語表記：Alcoin。以下「本アプリ」といいます）および共有家計簿の招待ページにおける利用者の情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。
          </p>
        </>
      }
    >
      <LegalSection id="personal-book" title="1. 個人家計簿（端末内のみ）">
        <p>
          支出の記録、予算、カテゴリ、月ごとの集計、貯金など個人家計簿のデータは、Apple の SwiftData
          を使って端末内に保存されます。言語、通貨、月の開始日などの設定も端末内（UserDefaults）に保存されます。ウィジェットやSiri（ショートカット）で表示・記録する情報も端末内で扱われます。Apple
          Watch 版は、iPhone から家計簿の要約を受け取り、記録を iPhone に送ります（Apple の WatchConnectivity
          による端末間の通信で、運営者のサーバーは通りません）。Apple Watch
          には、表示中の家計簿の要約（家計簿名、カテゴリ名、予算、使った額）と、iPhone
          にまだ届いていない記録（最長45日）が保存されます。iPhone では、Watch
          からの記録を二重に保存しないための記録ID（60日間）を保存します。
        </p>
        <p>
          「Apple Pay の支払いから記録」を設定した場合、支払いの金額と加盟店名を、記録の候補として iPhone と Apple Watch
          の端末内にのみ一時的に保存します。記録に使ったとき、または30分を過ぎたあとアルコインが次に動いたときに削除し（30分を過ぎたものは表示しません）、外部には送信しません。カード名は受け取りますが保存しません。
        </p>
        <p>
          これらのデータが運営者のサーバーに送信されることはありません。個人家計簿だけを使う場合、本アプリが運営者のサーバーと通信することはなく、インターネット接続がなくてもすべての機能を利用できます。
        </p>
        <p>
          なお、端末のデータは、利用者の設定によって iCloud
          バックアップなど端末のバックアップに含まれることがあります。また、Siri の利用時に Apple
          が取り扱う情報は、Apple のプライバシーポリシーに従います。
        </p>
      </LegalSection>

      <LegalSection id="shared-books" title="2. 共有家計簿を使うときに取り扱う情報">
        <p>
          共有家計簿を初めて作成または参加するときに、端末上でランダムな利用者IDが作成され、iOS
          のキーチェーンに保存されます。サインインは不要で、氏名、メールアドレス、電話番号などを登録する必要はありません。共有家計簿を使うときに限り、次の情報を運営者のサーバーに送信・保存します。
        </p>
        <BulletList>
          <li>利用者IDと、あなたが入力した表示名</li>
          <li>認証トークン（サーバーにはハッシュ値のみを保存し、トークンそのものは保存しません）</li>
          <li>
            共有家計簿の内容:
            家計簿の名前・アイコン、メンバーの表示名、支出（金額・カテゴリ・日付・記録したメンバー）、カテゴリ、月予算、招待コード
          </li>
          <li>
            プッシュ通知用のデバイストークン（APNs）:
            ほかのメンバーの変更を端末に反映するためのサイレント通知（画面に表示されない通知）に使います
          </li>
          <li>
            アルコイン Plus の購入情報: サブスクリプションの状態、App Store
            のトランザクション識別子（originalTransactionId）、有効期限、購入した商品、環境（本番またはテスト）
          </li>
          <li>
            通信に伴う情報:
            IPアドレス、アクセス日時、アプリのバージョンなど（サーバーのログとアクセス回数の制限に使います）
          </li>
        </BulletList>
        <LegalSubheading>取得しない情報</LegalSubheading>
        <BulletList>
          <li>氏名、メールアドレス、電話番号、住所</li>
          <li>位置情報、連絡先、写真</li>
          <li>広告識別子（IDFA）</li>
          <li>クレジットカード番号などの支払い情報（支払いは Apple が処理します）</li>
          <li>個人家計簿のデータ</li>
        </BulletList>
        <p>
          招待用のQRコードを読み取るためにカメラを使うことがありますが、カメラの映像は端末内でQRコードの読み取りにのみ使い、保存や送信は行いません。
        </p>
      </LegalSection>

      <LegalSection id="purposes" title="3. 利用目的">
        <p>運営者は、取り扱う情報を次の目的にのみ利用します。</p>
        <BulletList>
          <li>共有家計簿の提供（保存、メンバー間の同期、招待）</li>
          <li>ほかのメンバーの変更を端末に反映するためのサイレント通知の送信</li>
          <li>
            アルコイン Plus の購入の確認、共有家計簿を作成できるかどうかの判定、App Store
            からの通知（更新・解約・返金など）の処理
          </li>
          <li>不正利用や過剰なアクセスの防止、障害への対応、セキュリティの確保</li>
          <li>お問い合わせへの対応</li>
        </BulletList>
        <p>広告の配信、利用者の行動分析やプロファイリングには利用しません。</p>
      </LegalSection>

      <LegalSection id="third-parties" title="4. 第三者への提供と外部サービス">
        <p>
          運営者は、法令に基づく場合を除き、利用者の情報を本人の同意なく第三者に提供することはありません。情報を販売することもありません。本サービスの提供のために、次の外部サービスを利用しています。
        </p>
        <BulletList>
          <li>
            <strong>Amazon Web Services（AWS）</strong>: 共有家計簿のサーバー基盤です。データは東京リージョン（日本）の
            API Gateway、AWS Lambda、Amazon DynamoDB で処理・保存され、ログは Amazon CloudWatch Logs
            に保存されます。招待ページも AWS から配信しています。
          </li>
          <li>
            <strong>Apple</strong>: App Store（購入、決済、サブスクリプションの管理）と Apple Push Notification
            service（サイレント通知の配信）を利用しています。Apple による情報の取扱いは、Apple
            のプライバシーポリシーに従います。
          </li>
          <li>
            <strong>Google Fonts</strong>:
            招待リンク（https://coinly.bluedoghub.com/join/…）を開いたときに表示されるウェブページでのみ、文字の表示のために
            Google Fonts を読み込みます。その際、お使いのブラウザから Google に IP
            アドレスやユーザーエージェントなどが送信されます。本アプリ本体では使用しません。
          </li>
        </BulletList>
      </LegalSection>

      <LegalSection id="retention" title="5. 保存期間">
        <BulletList>
          <li>
            共有家計簿の内容:
            メンバーがいる間保存し、最後のメンバーが抜けた時点でサーバーから削除します。メンバーが抜けた後も、そのメンバーが記録した支出と表示名は、共有家計簿が削除されるまで残ります。
          </li>
          <li>招待コード: 発行から48時間で無効になり、その後自動的に削除されます。</li>
          <li>
            アクセス回数の制限に使うカウンター（IPアドレスを含むことがあります）:
            約2時間で期限切れとなり、自動的に削除されます。
          </li>
          <li>サーバーのログ（IPアドレスを含みます）: 30日後に削除されます。</li>
          <li>
            利用者ID、表示名、認証トークンのハッシュ値、デバイストークン、アルコイン Plus の購入情報:
            共有家計簿の機能を提供するために必要な間保存し、削除のご依頼があった場合は削除します。
          </li>
          <li>
            障害からの復旧のため、データベースのバックアップを最大35日間保持しています。削除したデータも、この期間はバックアップに残ることがあります。
          </li>
        </BulletList>
      </LegalSection>

      <LegalSection id="security" title="6. 安全管理">
        <BulletList>
          <li>本アプリとサーバーとの通信は、TLS で暗号化しています。</li>
          <li>認証トークンは、ハッシュ値のみを保存しています。</li>
          <li>サーバーに保存するデータは、保存時にも暗号化されています。</li>
          <li>サーバーの各機能には必要最小限の権限のみを与え、アクセスを制限しています。</li>
          <li>アクセス回数の制限などにより、不正なアクセスや招待コードの推測を防いでいます。</li>
        </BulletList>
        <p>ただし、インターネット上の通信や保存について、完全な安全を保証することはできません。</p>
      </LegalSection>

      <LegalSection id="your-rights" title="7. あなたの選択と権利">
        <BulletList>
          <li>共有家計簿を使わなければ、運営者のサーバーに情報が送信されることはありません。</li>
          <li>共有家計簿からは、アプリ内でいつでも抜けることができます。</li>
          <li>アルコイン Plus の解約は、iOS の「設定」から行えます。購入履歴は Apple が管理しています。</li>
          <li>
            運営者が保有するあなたの情報の開示、訂正、利用停止、削除をご希望の場合は、下記のお問い合わせ先までご連絡ください。アカウントがないため、ご本人の確認と対象データの特定のために、参加している共有家計簿の名前や表示名などをお伺いすることがあります。
          </li>
        </BulletList>
      </LegalSection>

      <LegalSection id="no-tracking" title="8. トラッキング・広告">
        <p>本アプリでは、次のものを一切使用していません。</p>
        <BulletList>
          <li>アナリティクスサービス</li>
          <li>トラッキング技術</li>
          <li>広告ネットワーク</li>
        </BulletList>
      </LegalSection>

      <LegalSection id="children" title="9. 子どものプライバシー">
        <p>
          本アプリは13歳未満の子どもを対象としたものではありません。13歳未満の子どもが共有家計簿を使う場合は、保護者の管理のもとでご利用ください。保護者の同意なく13歳未満の子どもの情報を取り扱っていることが判明した場合は、速やかに削除します。
        </p>
      </LegalSection>

      <LegalSection id="changes" title="10. ポリシーの変更">
        <p>
          本ポリシーは必要に応じて変更することがあります。変更する場合は、このページに新しいプライバシーポリシーを掲載し、ページ上部の「最終更新日」を更新します。重要な変更は、本アプリ内またはこのウェブサイトでもお知らせします。
        </p>
      </LegalSection>

      <LegalSection id="contact" title="11. お問い合わせ">
        <p>本ポリシーに関するご質問やご依頼は、以下までお問い合わせください。</p>
        <ContactBox emailLabel="メール" appLabel="アプリ" appName="アルコイン - かんたん家計簿" />
        <p>
          関連:{" "}
          <Link href={coinlyPaths.terms.ja} className="text-blue-600 hover:underline">
            利用規約
          </Link>
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
