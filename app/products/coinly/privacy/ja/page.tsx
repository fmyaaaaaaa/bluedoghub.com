import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="mx-auto min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Header section */}
        <section className="w-full py-12 px-4 md:py-20 bg-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24 max-w-4xl">
            <div className="flex flex-col items-center gap-4 text-center">
              <h1 className="text-display-md md:text-display-lg text-blue-900">プライバシーポリシー</h1>
              <p className="text-body-md md:text-body-lg text-black-600">最終更新日: 2025年12月7日</p>
              <div className="mt-4">
                <Link href="/products/coinly/privacy" className="text-blue-600 hover:text-blue-700 underline">
                  English
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="w-full py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24 max-w-4xl">
            <div className="space-y-10">
              {/* Introduction */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-body-lg text-blue-900 font-semibold mb-2">
                  あなたのプライバシーを守ります
                </p>
                <p className="text-body-md text-black-600">
                  Coinlyはあなたの個人データを外部サーバーに収集、保存、送信しません。
                  すべての財務情報はあなたのデバイスに保存されます。
                </p>
              </div>

              {/* 1. Information Collection */}
              <div>
                <h2 className="text-heading-lg text-blue-800 mb-4">1. 情報の収集と使用</h2>
                <div className="space-y-3 text-body-md text-black-600">
                  <p>
                    Coinlyはプライバシーを重視して設計されています。個人情報を外部サーバーに収集、保存、送信することはありません。
                  </p>
                </div>
              </div>

              {/* 2. Data Storage */}
              <div>
                <h2 className="text-heading-lg text-blue-800 mb-4">2. データの保存</h2>
                <div className="space-y-3 text-body-md text-black-600">
                  <p>以下を含むすべての財務データ:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>支出記録</li>
                    <li>予算設定</li>
                    <li>カテゴリ</li>
                    <li>月次サマリー</li>
                  </ul>
                  <p className="mt-3">
                    ...はAppleのSwiftDataフレームワークを使用してデバイス上にローカル保存されます。このデータがデバイスから離れることはありません。
                  </p>
                </div>
              </div>

              {/* 3. Settings and Preferences */}
              <div>
                <h2 className="text-heading-lg text-blue-800 mb-4">3. 設定と環境設定</h2>
                <div className="space-y-3 text-body-md text-black-600">
                  <p>
                    言語選択、通貨設定、会計月開始日などのユーザー設定は、UserDefaultsを使用してローカルに保存されます。この情報が外部サーバーに送信されることはありません。
                  </p>
                </div>
              </div>

              {/* 4. No Tracking or Analytics */}
              <div>
                <h2 className="text-heading-lg text-blue-800 mb-4">4. トラッキングや分析なし</h2>
                <div className="space-y-3 text-body-md text-black-600">
                  <p>以下のものは一切使用していません:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>アナリティクスサービス</li>
                    <li>トラッキング技術</li>
                    <li>広告ネットワーク</li>
                    <li>データを収集するサードパーティサービス</li>
                  </ul>
                </div>
              </div>

              {/* 5. No Internet Connection Required */}
              <div>
                <h2 className="text-heading-lg text-blue-800 mb-4">5. インターネット接続不要</h2>
                <div className="space-y-3 text-body-md text-black-600">
                  <p>
                    Coinlyは完全にオフラインで動作します。インターネット接続は必要なく、データがクラウドサービスに同期されることはありません。
                  </p>
                </div>
              </div>

              {/* 6. Your Control */}
              <div>
                <h2 className="text-heading-lg text-blue-800 mb-4">6. あなたのコントロール</h2>
                <div className="space-y-3 text-body-md text-black-600">
                  <p>データは完全にあなたの管理下にあります:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>すべてのデータはデバイスに保存</li>
                    <li>アカウント登録不要</li>
                    <li>ログイン情報の保存なし</li>
                    <li>アプリをアンインストールするとすべてのデータが削除されます</li>
                  </ul>
                </div>
              </div>

              {/* 7. Children's Privacy */}
              <div>
                <h2 className="text-heading-lg text-blue-800 mb-4">7. 子どものプライバシー</h2>
                <div className="space-y-3 text-body-md text-black-600">
                  <p>
                    Coinlyは13歳未満の子どもを含む、誰からもデータを収集しません。
                  </p>
                </div>
              </div>

              {/* 8. Changes to This Policy */}
              <div>
                <h2 className="text-heading-lg text-blue-800 mb-4">8. ポリシーの変更</h2>
                <div className="space-y-3 text-body-md text-black-600">
                  <p>
                    このプライバシーポリシーは随時更新される場合があります。変更がある場合は、このページに新しいプライバシーポリシーを掲載し、ページ上部の「最終更新日」を更新することでお知らせします。
                  </p>
                </div>
              </div>

              {/* 9. Contact Us */}
              <div>
                <h2 className="text-heading-lg text-blue-800 mb-4">9. お問い合わせ</h2>
                <div className="space-y-3 text-body-md text-black-600">
                  <p>このプライバシーポリシーについてご質問がある場合は、以下までお問い合わせください:</p>
                  <div className="bg-gray-50 p-4 rounded-lg mt-3">
                    <p className="font-medium text-black-700">メール</p>
                    <p className="text-blue-600 font-medium">support@bluedoghub.com</p>
                    <p className="font-medium text-black-700 mt-3">アプリ</p>
                    <p className="text-black-600">Coinly - かんたん家計簿</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
